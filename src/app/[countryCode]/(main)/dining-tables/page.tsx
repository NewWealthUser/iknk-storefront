import React from 'react';
import DiningTablesGridView from '../../../../modules/dining-tables/components/dining-tables-grid-view';

const DiningTablesPage = () => {
  return (
    <main id="main" className="jss18" style={{ flex: '1 1 0%', position: 'relative', zIndex: 1099, minHeight: '80vh', paddingTop: '0px' }}>
      <div style={{ display: 'none' }}>SSR V1</div>
      <DiningTablesGridView />
      <button className="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeLarge MuiFab-default MuiFab-root MuiFab-circular MuiFab-sizeLarge MuiFab-default bottom-20 right-4 z-[11] !border !border-solid !border-[#999999] !bg-white css-61j2sn" tabIndex={0} type="button" style={{ opacity: 0, visibility: 'hidden', position: 'fixed' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="test-rh-arrow-icon" className="inline-block !h-4 !w-4 text-base !text-[15px]" style={{ transform: 'rotate(-90deg) scale(2, 1.875)' }}>
          <path d="M6 4L10 8L6 12" stroke="black" strokeWidth="0.4"></path>
        </svg>
      </button>
      <div className="hidden">SSR V1</div>
    </main>
  );
};

export default DiningTablesPage;