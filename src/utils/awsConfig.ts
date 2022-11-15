const s3 = require('aws-s3'); //any implícito

const configAws = {
	bucketName: 'nome',
	dirName: 'photos', /* optional */
    region: 'eu-west-1',
    accessKeyId: 'ANEIFNENI4324N2NIEXAMPLE',
    secretAccessKey: 'cms21uMxçduyUxYjeg20+DEkgDxe6veFosBT7eUgEXAMPLE',
    s3Url: 'https://my-s3-url.com/', /* optional */
}

export const serviceS3 = new s3(configAws);