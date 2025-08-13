async function startCalling() {
  const callClient = new AzureCommunicationCalling.CallClient();
  const tokenCredential = new AzureCommunicationCalling.AzureCommunicationTokenCredential("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZDODBDMjc5MUZBMEVCODczMDI2NzlFRDhFQzFDRTE5OTNEQTAwMjMiLCJ4NXQiOiJiSURDZVItZzY0Y3dKbm50anNIT0daUGFBQ00iLCJ0eXAiOiJKV1QifQ.eyJza3lwZWlkIjoiYWNzOjA1N2M0NTY4LTMyZWMtNGI3OS05YTY5LTgzMGY3MTUxZjg5MV8wMDAwMDAyOS00NTRiLTAyZWYtNmEwYi0zNDNhMGQwMDI5MmIiLCJzY3AiOjE3OTIsImNzaSI6IjE3NTUxMjE4MDIiLCJleHAiOjE3NTUyMDgyMDIsInJnbiI6ImFtZXIiLCJhY3NTY29wZSI6InZvaXAiLCJyZXNvdXJjZUlkIjoiMDU3YzQ1NjgtMzJlYy00Yjc5LTlhNjktODMwZjcxNTFmODkxIiwicmVzb3VyY2VMb2NhdGlvbiI6InVuaXRlZHN0YXRlcyIsImlhdCI6MTc1NTEyMTgwMn0.M2YB7wgl4sZafNLNAxptPX94W-nk-ammAIiX_ZTTiQnzdNue9zVOH2i2nXHpKhVGWsBiY72Rs6QY5DvlBQFyPsUbI2o6jyozFCSz-kA6Z51N0eJYLwWrZPSAX3ubdWTbA6wPZ7482m_LYNMc4Ld6znfhXnoSbcMJ-WdARUoTKdWN5A0fq-BtZHM29k5yCp3t6Fzebgn0FiipeRqHq6Q_V9c0KhisXEejNJuz-XL-X4MUpnc3WkX20EBFgVBdT_2AocpK5e5vp_xcy9YP97UFj8Ay7ZU_D43Z3Z5ccOWLkOxEggLYjJzgxlYC1XBfVYRtkxtD4IS4aBUT4QpusmQ6_Q",
  "user_id": "8:acs:057c4568-32ec-4b79-9a69-830f7151f891_00000029-454b-02ef-6a0b-343a0d00292b");

  const callAgent = await callClient.createCallAgent(tokenCredential);

  document.getElementById("startCall").onclick = async () => {
    const call = await callAgent.startCall([
      { communicationUserId: "8:acs:057c4568-32ec-4b79-9a69-830f7151f891_00000029-40c5-c081-e3c7-593a0d00c981" }
    ]);

    call.on('stateChanged', () => {
      document.getElementById("callStatus").innerText = `Status: ${call.state}`;
    });
  };
}

startCalling();
