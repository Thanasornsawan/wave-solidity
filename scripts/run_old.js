const main = async () => {
    //const [owner, randomPerson] = await hre.ethers.getSigners();

    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    //This will actually compile our contract and generate the necessary files we need
    //to work with our contract under the artifacts directory. Go check it out after you run this :).
    
    //const waveContract = await waveContractFactory.deploy();
    const waveContract = await waveContractFactory.deploy({
      value: hre.ethers.utils.parseEther("0.1"),
    });
    //Hardhat will create a local Ethereum network for us, 
    //but just for this contract. Then, after the script completes it'll destroy that local network. 
    //So, every time you run the contract, it'll be a fresh blockchain.
    await waveContract.deployed();
    //We'll wait until our contract is officially deployed to our local blockchain!
    // Our constructor runs when we actually deploy.
    console.log("Contract deployed to:", waveContract.address);
    //console.log("Contract deployed by:", owner.address);

    /*
    * Get Contract balance
    */
    let contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(contractBalance));

    /**
    * Let's send a few waves!
    */
  let waveTxn = await waveContract.wave("A message!");
  await waveTxn.wait(); // Wait for the transaction to be mined

  /*
  const [_, randomPerson] = await hre.ethers.getSigners();
  waveTxn = await waveContract.connect(randomPerson).wave("Another message!");
  await waveTxn.wait(); // Wait for the transaction to be mined
  */

  /*
   * Get Contract balance to see what happened!
   */
  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);

    /*
    let user = [];
    var count = 2;
    let userAddress = new Map();
    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();
    userAddress.set(waveContract.address,waveCount.toNumber());
    user.push(userAddress);
    
    for(i=0; i<=count; i++) {
      waveTxn = await waveContract.connect(randomPerson).wave();
      await waveTxn.wait();
      waveCount = await waveContract.getTotalWaves();
      userAddress.set(randomPerson.address, waveCount.toNumber()-1);
      if(!userAddress.has(randomPerson.address)){
        user.push(userAddress);
      }
    }
   
    console.log(user); */
  };
  
  
  //npx hardhat run scripts/run.js
  //The Hardhat Runtime Environment, or HRE for short, is an object containing all the functionality
  // that Hardhat exposes when running a task, test or script. In reality, Hardhat is the HRE.
  const runMain = async () => {
    try {
      await main();
      process.exit(0); // exit Node process without error
    } catch (error) {
      console.log(error);
      process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
  };
  
  runMain();