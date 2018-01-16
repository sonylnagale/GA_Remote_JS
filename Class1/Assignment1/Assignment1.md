# Hacker!!!

Oh no!! Someone broke into your corporate system and is stealing information! We have to stop them at all costs!

## Pseudocode

### Step 1: Disable

Write a few lines of pseudocode to define how you would _disable_ access to the compromised systems. This can be anything from passwords to network security.

```
// MARK: - Disable Access
// Remove system from public access
// Reset all passwords
// Check logs + network if virus still running
// Shutdown systems
// Spin up new instance
```

### Step 2: Delete

Next, write pseudocode to identify how to possibly remove malicious files left behind by the hacker. Often times, hackers will place "back door" files to let them access systems easily at a later date, so let's find them and delete them!

```
// MARK: - Remove Malicious Files
// Check current filesystem against latest backup
// Flag and check all new files in compromised systems
// Reset all keys
// Spin up new instance from backup
```

### Step 3: Deter

Finally, let's come up with some ways to prevent this from happening again. Write some logic to prevent another attack, whether it's on login attacks, DDoS, or any other vector for attack. If you're not too familiar with network security, don't worry! Think about what happens when or if you find your ATM card or Facebook password is compromised and apply that to a computer network.

```
// MARK: - Deter
// Add 2-factor authentication or OAuth2/SAML
// Establish NACLs and lock down APIs
// Create cloud distribution and log for DDoS attacks
// Create a load balancer for scaling purposes for DDoS
```
