import torch

def verify():
    try:
        device = 'cuda' if torch.cuda.is_available() else 'cpu'
    except Exception as e:
        return f"{e}"
    
    print(f'CUDA Version: {torch.torch.version.cuda}')
    print(f'CUDA Available: {torch.cuda.is_available()}')
    print(f'Device: {device.upper()}')
    print(f"GPU: {torch.cuda.get_device_name(0)}\n")

if __name__ == "__main__":
    verify()