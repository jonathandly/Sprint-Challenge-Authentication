1. What is the purpose of using sessions?

   Sessions provide a way to persist data across requests.

2. What does bcrypt do to help use store passwords in a secure manner?
   
   Provides password hashing function, implements salting both manual and automatically.

3. What does bcrypt do to slow down attackers?

   Adds accumulative hashing rounds. The algorithm hashes the information multiple times, doing this requires a hacker to have the hash, know the algorithm used, and how many rounds were used to generate the hash in order to break it.

4. What are the three parts of the JSON Web Token?

   The header, the payload, and the signature.
