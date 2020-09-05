import { FormattableAsset } from './helpers/formattable-asset';

export interface BondMetrics {
  totalActiveBond: string;
  averageActiveBond: string;
  medianActiveBond: string;
  minimumActiveBond: string;
  maximumActiveBond: string;
  totalStandbyBond: string;
  averageStandbyBond: string;
  medianStandbyBond: string;
  minimumStandbyBond: string;
  maximumStandbyBond: string;
}

export interface BlockRewards {
  blockReward: string;
  bondReward: string;
  stakeReward: string;
}

class NetworkStatusBase extends FormattableAsset {
  bondMetrics: BondMetrics;
  activeNodeCount: number;
  standbyNodeCount: number;
  poolShareFactor: string;
  blockRewards: BlockRewards;
  bondingROI: string;
  stakingROI: string;
  nextChurnHeight: string;
  poolActivationCountdown: number;
}

export class NetworkStatusDTO extends NetworkStatusBase {
  activeBonds: string[];
  standbyBonds: string[];
  totalStaked: string;
  totalReserve: string;
}

export class NetworkStatus extends NetworkStatusBase {

  activeBonds: number[];
  standbyBonds: number[];
  totalStaked: number;
  totalReserve: number;
  totalActiveBonded: number;
  totalStandbyBonded: number;
  totalBonded: number;
  totalCapital: number;


  constructor(networkDTO: NetworkStatusDTO) {
    super();

    this.bondMetrics = networkDTO.bondMetrics;

    /**
     * Bonds
     */
    this.activeBonds = networkDTO.activeBonds.map( (bondStr) => this.formatAssetUnits( Number(bondStr), 8 ));
    this.standbyBonds = networkDTO.standbyBonds.map( (bondStr) => this.formatAssetUnits( Number(bondStr), 8 ) );
    this.totalActiveBonded = this.activeBonds.reduce( (total, bond) => total + bond, 0);
    this.totalStandbyBonded = this.standbyBonds.reduce( (total, bond) => total + bond, 0);
    this.totalBonded = this.totalActiveBonded + this.totalStandbyBonded;



    this.totalStaked = this.formatAssetUnits( (Number(networkDTO.totalStaked) * 2), 8);
    this.totalReserve = this.formatAssetUnits(Number(networkDTO.totalReserve), 8);

    this.activeNodeCount = networkDTO.activeNodeCount;
    this.standbyNodeCount = networkDTO.standbyNodeCount;
    this.poolShareFactor = networkDTO.poolShareFactor;
    this.blockRewards = networkDTO.blockRewards;
    this.bondingROI = networkDTO.bondingROI;
    this.stakingROI = networkDTO.stakingROI;
    this.nextChurnHeight = networkDTO.nextChurnHeight;
    this.poolActivationCountdown = networkDTO.poolActivationCountdown;

    this.totalCapital = this.totalStaked + this.totalBonded + this.totalReserve;

  }

}