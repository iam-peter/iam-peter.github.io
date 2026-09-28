---
title: "VirtualBox: VT-x is not available (VERR_VMX_NO_VMX)"
date: 2026-09-28
tags: [windows, virtualbox, hyper-v, virtualization]
---

On Windows, 64-bit VirtualBox machines may fail to start with:

```text
VT-x is not available (VERR_VMX_NO_VMX).
Result Code: E_FAIL (0x80004005)
```

Hyper-V claims the CPU's VT-x virtualization extensions at boot and does not
share them with VirtualBox. 32-bit guests may still work, which makes this
confusing. There are two ways out:

- **Remove Hyper-V** if you don't need it: *Turn Windows features on or off*
  → untick *Hyper-V* → reboot.

- **Keep Hyper-V installed but don't launch it at boot.** In an
  administrator prompt:

  ```bat
  bcdedit /set hypervisorlaunchtype off
  ```

  Reboot. To turn Hyper-V back on later:

  ```bat
  bcdedit /set hypervisorlaunchtype auto
  ```

Docker Desktop, WSL 2 and similar tools depend on Hyper-V, so they stop
working while it is disabled.

Source: [deltacode.be](http://blog.deltacode.be/2015/10/21/vt-x-is-not-available-verr_vmx_no_vmx-result-code-e_fail-0x80004005/)
