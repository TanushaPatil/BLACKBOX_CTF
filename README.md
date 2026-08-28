# BLACKBOX CTF

## The Broken License

**Category:** Reverse Engineering  
**Difficulty:** Easy / Medium  
**Flag Format:** `TECH{...}`

---

## About the Challenge

BLACKBOX is a beginner-friendly reverse engineering CTF challenge.

The participant is given a Windows executable and must analyze its license validation logic to recover the correct license key.

The challenge is designed to introduce basic binary analysis, string analysis, and understanding of program logic using tools such as Ghidra.

---

## Objective

Find the valid license key and use it to obtain the flag.

The intended solving flow is:

```text
Run blackbox.exe
        ↓
Analyze the executable
        ↓
Find the license validation logic
        ↓
Recover the license key
        ↓
Enter the key
        ↓
Get the flag

Challenge Files
challenge/
└── blackbox.exe

The source code and documentation are included separately for challenge
 development and reference.

Tools Used
Ghidra
PowerShell
GCC / MinGW

Flag Format
TECH{...}

Created as a cybersecurity reverse engineering CTF challenge.

Learning Objective

This challenge demonstrates how compiled programs can be analyzed to understand hidden validation logic.

It focuses on:

Basic reverse engineering
Static analysis
String analysis
Following program references
Understanding simple validation logic

### ⚠️ One thing for GitHub

If this repository is going to be **public**, don't put the actual flag or license key in `README.md`. The README above deliberately doesn't reveal them.

Keep the answer inside:

```text
documentation/solution.md
