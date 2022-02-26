const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("WavePortal", function(){
    it("gets the WavePortalContract contract", async function(){
        const wavePortalContract = await ethers.getContractFactory("WavePortal");
    });

});

