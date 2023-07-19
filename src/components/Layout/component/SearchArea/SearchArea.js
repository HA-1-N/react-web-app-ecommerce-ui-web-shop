import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchArea.module.scss';

const cx = classNames.bind(styles);

const SearchArea = (props) => {
    const { onClose, openSearchArea } = props;
    return (
        <>
            <div className={cx('search-overlay')}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className={cx('search-overlay-layer')}></div>
                        <div className={cx('search-overlay-layer')}></div>
                        <div className={cx('search-overlay-layer')}></div>
                        <div className={cx('search-overlay-close')}>
                            <span className={cx('search-overlay-close-line')}></span>
                            <span className={cx('search-overlay-close-line')}></span>
                        </div>

                        <div className={cx('search-overlay-form')}>
                            <input className={cx('input-search')}></input>
                            <button className={cx('btn-submit')}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchArea;
