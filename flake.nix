{
  description = "Python CUDA + NodeJS + Tauri";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
  };

  outputs = { self, nixpkgs }:
  let
    system = "x86_64-linux";

    pkgs = import nixpkgs {
      inherit system;
      config.allowUnfree = true;
    };

    nodeDeps = import ./nodejs.nix { inherit pkgs; };
    tauriDeps = import ./tauri.nix { inherit pkgs; };
    rustDeps  = import ./rust.nix  { inherit pkgs; };

    python = pkgs.python312;

    baseLibs = pkgs.lib.makeLibraryPath [
      pkgs.stdenv.cc.cc
      pkgs.zlib
      pkgs.cudaPackages.cudatoolkit
    ];

  in {
    devShells.${system}.default = pkgs.mkShell {
      name = "zentinium";

      packages = with pkgs; [
        python
        python.pkgs.pip
        python.pkgs.virtualenv

        zlib
        stdenv.cc.cc
        glibc

        cudaPackages.cudatoolkit
      ]
      ++ nodeDeps.buildInputs
      ++ tauriDeps.buildInputs
      ++ rustDeps.buildInputs;

      # FIX: expose env vars to build tools like pkg-config and Cargo
      PKG_CONFIG_PATH = tauriDeps.PKG_CONFIG_PATH;

      LD_LIBRARY_PATH = "/run/opengl-driver/lib:/run/opengl-driver-32/lib:${baseLibs}:${nodeDeps.LD_LIBRARY_PATH}:${tauriDeps.LD_LIBRARY_PATH}";

      shellHook = ''
        # npm global installs fix
        export NPM_CONFIG_PREFIX=$PWD/.npm-global
        export PATH=$PWD/.npm-global/bin:$PATH

        export venvDir=env

        if [ ! -d "$venvDir" ]; then
          echo "Creating Python virtual environment"
          ${python}/bin/python -m venv "$venvDir"
        fi

        source "$venvDir/bin/activate"

        echo "Python  : $(python --version)"
        echo "NodeJS  : $(node --version)"
        echo "npm     : $(npm --version)"
        echo "Rustc   : $(rustc --version)"
        echo "Cargo   : $(cargo --version)"
        echo "----------------------------"

        python ./verifications.py
      '';
    };
  };
}