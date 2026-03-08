{ pkgs }:

{
  buildInputs = with pkgs; [
    rustc
    cargo
  ];
}