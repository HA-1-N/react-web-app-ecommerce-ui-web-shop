import React, { useState } from 'react';
import Header from '../component/Header/Header';
import Navbar from '../component/Navbar/Navbar';
import SearchArea from '../component/SearchArea/SearchArea';

const DefaultLayout = (props) => {
    const { children } = props;
    const [openSearchArea, setOpenSearchArea] = useState(false);
    const handleOpenSearchArea = () => {
        setOpenSearchArea(true);
    };

    const handleCloseSearchArea = () => {
        setOpenSearchArea(false);
    };

    return (
        <>
            <div>
                <Header />
                <Navbar onOpen={handleOpenSearchArea} />
                {/* {openSearchArea ? (
                    <SearchArea openSearchArea={openSearchArea} onClose={handleCloseSearchArea} />
                ) : (
                    <></>
                )} */}
                <div className="content">{children}</div>
            </div>
        </>
    );
};

export default DefaultLayout;
