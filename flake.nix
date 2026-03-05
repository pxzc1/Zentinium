{
  description = "Python CUDA + Node Electron Integration";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
        inherit system;
        config.allowUnfree = true; # Required for CUDA and some Electron dependencies
      };

      nodeDeps = import ./dependency.nix { inherit pkgs; };
      tauriDeps = import ./tauri.nix { inherit pkgs; };
      
      python = pkgs.python312;
    in {
      devShells.${system}.default = pkgs.mkShell {
        name = "shell";

        packages = with pkgs; [
          # Python dependencies
          python
          python.pkgs.pip
          python.pkgs.virtualenv
          zlib
          stdenv.cc.cc
          glibc
          cudaPackages.cudatoolkit
        ] ++ nodeDeps.buildInputs ++ tauriDeps.buildInputs;

        shellHook = ''
          export NPM_CONFIG_PREFIX=$PWD/.npm-global
          export PATH=$PWD/.npm-global/bin:$PATH

          export venvDir=env
          export LD_LIBRARY_PATH="/run/opengl-driver/lib:/run/opengl-driver-32/lib:${pkgs.lib.makeLibraryPath [
            pkgs.stdenv.cc.cc
            pkgs.zlib
            pkgs.cudaPackages.cudatoolkit
          ]}:${nodeDeps.LD_LIBRARY_PATH}:$LD_LIBRARY_PATH"

          if [ ! -d "$venvDir" ]; then
            echo "Creating Virtual Environment in $venvDir"
            ${python}/bin/python -m venv "$venvDir"
          fi
          source "$venvDir/bin/activate"
          echo "Python: $(python --version)"
          python ./verifications.py

          echo "Node: $(node -v) | npm: $(npm -v)"
          echo "rustc: $(rustc --version)"
          echo "cargo: $(cargo --version)"
        '';
      };
    };
}