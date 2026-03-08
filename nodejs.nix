{ pkgs }:

pkgs.mkShell {
  buildInputs = [
    # NodeJS
    pkgs.nodejs_latest

    # Basic runtime libs sometimes needed by native node modules
    pkgs.openssl
    pkgs.pkg-config
  ];

  shellHook = ''
    # Fix global npm installs (avoid read-only filesystem issue)
    export NPM_CONFIG_PREFIX=$PWD/.npm-global
    export PATH=$PWD/.npm-global/bin:$PATH

    echo "Node: $(node -v)
    echo "npm: $(npm -v)"
  '';
}