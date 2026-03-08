{ pkgs }:

{
  buildInputs = [
    pkgs.nodejs_latest
    pkgs.openssl
    pkgs.pkg-config
  ];

  LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
    pkgs.openssl
  ];
}