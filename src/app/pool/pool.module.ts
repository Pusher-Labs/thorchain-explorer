import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PoolComponent } from './pool.component';
import { TransactionsTableModule } from '../_components/transactions-table/transactions-table.module';
import { PoolMembersTableModule } from '../_components/pool-members-table/pool-members-table.module';
import { PoolTxsComponent } from './pool-txs/pool-txs.component';
import { PoolMembersComponent } from './pool-members/pool-members.component';
import { PoolDetailsComponent } from './pool-details/pool-details.component';
import { PipesModule } from '../_pipes/pipes.module';
import { LoadingModule } from '../_components/loading/loading.module';
import { AssetLogoModule } from '../_components/asset-logo/asset-logo.module';
import { ErrorModule } from '../_components/error/error.module';
import { ContentItemModule } from '../_components/content-item/content-item.module';

@NgModule({
  declarations: [PoolComponent, PoolTxsComponent, PoolDetailsComponent, PoolMembersComponent],
  imports: [
    CommonModule,
    PipesModule,
    TransactionsTableModule,
    PoolMembersTableModule,
    LoadingModule,
    AssetLogoModule,
    ErrorModule,
    ContentItemModule,
    RouterModule.forChild([
      {
        path: '',
        component: PoolComponent,
        children: [
          {
            path: '',
            component: PoolDetailsComponent
          },
          {
            path: 'txs',
            component: PoolTxsComponent,
            data: {
                breadcrumb: 'Transactions'
            }
          },
          {
            path: 'members',
            component: PoolMembersComponent,
            data: {
                breadcrumb: 'Members'
            }
          }
        ]
      }
    ])
  ]
})
export class PoolModule { }
