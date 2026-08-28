# BLACKBOX CTF — Complete Solver Write-up

## Challenge Name

The Broken License

## Category

Reverse Engineering

## Difficulty

Easy / Medium

## Flag

TECH{reverse_the_blackbox}

## 1. Challenge Overview

The challenge provides a Windows executable named `blackbox.exe`.

When executed, the program asks the user for a license key.

The objective is to reverse engineer the executable and recover the valid license key without guessing it.

A successful license-key check causes the program to reveal the flag.

---

## 2. Initial Execution

First, execute the binary:

```powershell
.\blackbox.exe