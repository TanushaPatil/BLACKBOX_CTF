# BLACKBOX — Setup Instructions

## Requirements

The challenge requires a Linux environment with a C compiler.

Recommended environments:

- Kali Linux
- Ubuntu
- Debian
- WSL

## Building From Source

Install GCC if necessary:

    sudo apt update
    sudo apt install gcc

Navigate to the challenge directory:

    cd challenge

Compile:

    gcc blackbox.c -o blackbox

Make the executable runnable:

    chmod +x blackbox

Run:

    ./blackbox

## Expected Initial Output

The program should display:

    ========================================
                 BLACKBOX CTF
              THE BROKEN LICENSE
    ========================================
     Secure Software Activation System
    ========================================

    Enter license key:

Entering an incorrect key should produce:

    [-] Invalid license.
    [-] Verification failed.

## Challenge Deployment

For participants, provide only the compiled executable:

    blackbox

Do not provide:

    blackbox.c
    flag.txt

The source code and flag are included separately in the
challenge-author package for reproducibility and verification.

## Reproducibility

The challenge uses only the standard C library and does not
require external dependencies.

The executable can therefore be rebuilt from the supplied source
using GCC.