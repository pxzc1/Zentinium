{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    # NodeJS
    pkgs.nodejs_latest

    # These libraries are often required by Electron to actually render a window
    pkgs.glib
    pkgs.nss
    pkgs.nspr
    pkgs.atk
    pkgs.at-spi2-atk
    pkgs.cups
    pkgs.libdrm
    pkgs.dbus
    pkgs.mesa
    pkgs.gtk3
    pkgs.pango
    pkgs.cairo
    pkgs.libX11
    pkgs.libXcomposite
    pkgs.libXdamage
    pkgs.libXext
    pkgs.libXfixes
    pkgs.libXrandr
    pkgs.libgbm
    pkgs.expat
    pkgs.libxcb
    pkgs.libxshmfence
    pkgs.libxkbcommon
  ];

  # This ensures Electron can find the libraries listed above
  LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath (buildInputs);

  shellHook = ''
    # Redirect global npm installs to avoid the Read-Only error
    export NPM_CONFIG_PREFIX=$PWD/.npm-global
    export PATH=$PWD/.npm-global/bin:$PATH

    echo "Node: $(node -v) | NPM: $(npm -v)"
  '';
}