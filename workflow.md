### Techstack

Frontend - React, Tailwind, Typescript, Shadcn, Sign Protocol

Backend - Node.js, Typescipt, Prisma ORM, .

Contract - Solidity, wagmi

### Workflow

- [ ]  Decide schemas for mongodb, and interfaces for typescript
- [ ]  Create Landing page (before signin)
    - [ ]  Create a basic landing page that has connect wallet button
    - [ ]  Write a smart contract that connects wallets with our blockchain
    - [ ]  Register users if their wallet is not linked with our blockchain. Store user details onChain
    
    ---
    
    ---
    
    ---
    
- [ ]  Create **Landing page** (after singin)
    - [ ]  Create a Navigation Menu to accomodate pages `LandingPage` `MarketPlace`  `Inventory`  `Sold`     `AddProducts`  `Transactions`  `Verify`
    - [ ]  v2.0 Greet user. Fetch user info using wallet address from blockchain
    
    ---
    
    ---
    
    ---
    
- [ ]  Create  **Add Drugs** page
    - [ ]  Basic Frontend form to add drugs.
        - [ ]  v2.0 Create a .json file containing most used drugs and add search bar inside form to search for those drugs.
        - [ ]  v2.0 User must be able to specify the composition of drug.
        - [ ]  v2.0 User should be able to add more composition fields
    - [ ]  Add product into blockchain and get attestation
    - [ ]  Store new product in database along with attestation
    - [ ]  v2.0 Add validation to discard products with same SerialNo.
    - [ ]  v2.0 Create QR corresponding to attestation id
    - [ ]  v2.0 Upload QR on S3 and add url to database
    
    ---
    
    ---
    
    ---
    
- [ ]  Create **Market place** page
    - [ ]  Fetch all products into single page except (current user’s products, on Hold products of other users)
    - [ ]  Create a Card that has all details , transaction history button , Buy button.
        - [ ]  Add functionality to buy product, create attestation and update database state of the buyer and seller
        - [ ]  Add functionality to fetch transaction history using attestation id, from blockchain
            - [ ]  Create a Modal/Page to show all previous attestations for that product
    - [ ]  v2.0 Create a search bar and filter information as per search query
    - [ ]  v2.0 Create pagination to avoid long scroll
    
    ---
    
    ---
    
    ---
    
- [ ]  Create **Inventory** page (Shows current holdings of users)
    - [ ]  Fetch all products related to wallet address, that have hold/sell state
    - [ ]  Create a Card that has all details , transaction history button , and a hold/sell button
        - [ ]  Write query to toggle state of users product holding from hold→sell , sell→hold.
        - [ ]  Add functionality to fetch transaction history using attestation id, from blockchain
            - [ ]  Create a Modal/Page to show all previous attestations for that product
    - [ ]  v2.0 Create a search bar and filter information as per search query
    - [ ]  v2.0 Create pagination to avoid long scroll

---

---

---

- [ ]  ( v2.0 )Add toasts, skeletons and other ui components wherever necessary.

---

---

---

- [ ]  ( v2.0 )Create **Previously Sold Drugs**  page (To show all products sold by user)
    - [ ]  Fetch all products related to wallet address, that have sold state
    - [ ]  Create a Card that has all details and Transaction History button
        - [ ]  Add functionality to fetch transaction history using attestation id, from blockchain
            - [ ]  Create a Modal/Page to show all previous attestations for that product
    - [ ]  v2.0 Create a search bar and filter information as per search query
    - [ ]  v2.0 Create pagination to avoid long scroll

---

---

---

- [ ]  ( v2.0 ) Create **Transactions**  page (To show all user transactions on blockchain)
    - [ ]  Fetch all products related to wallet address, using from(buy), to(sell) parameters
    - [ ]  Create a Table to show all transactions

---

---

---

- [ ]  ( v2.0 ) Create **Verify products**  page
    - [ ]  Take attestation id as parameter and get transaction history
    - [ ]  Take QR code as a file from user and get transaction history
    - [ ]  Take QR photo as file from user and get transaction history