const ipfsClient = require('ipfs-http-client');

const projectId = '2LTW8u7SSrQ9UtvTH682i05nGd6';
const projectSecret = 'b18cfdd32b8e55a16ac5d7a15288cea4';
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = ipfsClient.create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

client.pin.add('QmeGAVddnBSnKc1DLE7DLV9uuTqo5F7QbaveTjr45JUdQn').then((res) => {
    console.log(res);
});