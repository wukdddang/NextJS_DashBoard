'use client';

import React from 'react';
import MainWrapper from '@/app/components/molecules/MainWrapper';

import HistoryTableContainer from '@/app/containers/HistoryTableContainer';

export default function HistoryPage() {
  return (
    <MainWrapper>
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <HistoryTableContainer isHistoryPage={false} />
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}
