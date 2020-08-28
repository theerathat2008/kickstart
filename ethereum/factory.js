import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xdbcA6C4760C1c611Db3188E4866D71f34018D18F'
);

export default instance;
