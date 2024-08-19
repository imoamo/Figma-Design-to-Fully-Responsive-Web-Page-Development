import React from 'react'
import style from './Hero.module.css';
import BarChart from './BarChart';

const Hero = () => {
    return (
        <div className={style.main}>
            {/* section-1-start */}
            <div className={style.divider_1}>

                <div className={style.section_1}>
                    <div className={style.s1_text}>
                        Quick Links
                    </div>
                    {/* 1st component */}
                    <div className={style.multiple_img}>

                        <div className={style.single_component}>
                            <div className={style.image}>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.83013 14.376L16.7061 6.5L18 7.7939L10.124 15.6699H17.0657V17.5H7V7.43428H8.83013V14.3751V14.376Z" fill="#667085" />
                                </svg>
                            </div>

                            <p className={style.first_para}>Deposit</p>
                        </div>

                        {/* 2nd component */}

                        <div className={style.single_component}>
                            <div className={style.image}>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.1699 9.62403L8.2939 17.5L7 16.2061L14.8751 8.33013H7.93428V6.5H18V16.5657H16.1699V9.62403Z" fill="#667085" />
                                </svg>

                            </div>

                            <p className={style.first_para}>Withdraw</p>
                        </div>

                        {/* 3rd component */}

                        <div className={style.single_component}>
                            <div className={style.image}>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 12C3.5 11.2215 3.599 10.4673 3.7844 9.74641C4.28162 9.77254 4.77638 9.66068 5.214 9.42319C5.65161 9.18569 6.01503 8.83182 6.26409 8.40068C6.51314 7.96954 6.63813 7.47792 6.62523 6.98019C6.61233 6.48245 6.46205 5.99797 6.191 5.58031C7.27905 4.50982 8.62171 3.73395 10.0925 3.32581C10.3184 3.76993 10.6628 4.14289 11.0875 4.40338C11.5123 4.66388 12.0008 4.80176 12.4991 4.80176C12.9974 4.80176 13.4859 4.66388 13.9107 4.40338C14.3354 4.14289 14.6798 3.76993 14.9057 3.32581C16.3765 3.73395 17.7192 4.50982 18.8072 5.58031C18.5358 5.99804 18.3853 6.48271 18.3723 6.98067C18.3594 7.47864 18.4844 7.97049 18.7336 8.40182C18.9828 8.83314 19.3464 9.18712 19.7843 9.42458C20.2222 9.66204 20.7173 9.77374 21.2147 9.74731C21.4001 10.4673 21.4991 11.2215 21.4991 12C21.4991 12.7785 21.4001 13.5327 21.2147 14.2536C20.7174 14.2273 20.2225 14.339 19.7848 14.5764C19.347 14.8139 18.9835 15.1677 18.7343 15.5989C18.4851 16.0301 18.3601 16.5218 18.3729 17.0196C18.3858 17.5174 18.5361 18.002 18.8072 18.4197C17.7192 19.4902 16.3765 20.2661 14.9057 20.6742C14.6798 20.2301 14.3354 19.8571 13.9107 19.5966C13.4859 19.3361 12.9974 19.1982 12.4991 19.1982C12.0008 19.1982 11.5123 19.3361 11.0875 19.5966C10.6628 19.8571 10.3184 20.2301 10.0925 20.6742C8.62171 20.2661 7.27905 19.4902 6.191 18.4197C6.46236 18.002 6.61286 17.5173 6.62585 17.0193C6.63885 16.5214 6.51383 16.0295 6.26463 15.5982C6.01543 15.1669 5.65177 14.8129 5.21388 14.5754C4.77598 14.338 4.28093 14.2263 3.7835 14.2527C3.599 13.5336 3.5 12.7794 3.5 12ZM7.8236 14.7C8.3906 15.6819 8.5526 16.8114 8.3312 17.8716C8.6984 18.1326 9.089 18.3585 9.4985 18.5466C10.3235 17.8076 11.3924 17.3992 12.5 17.4C13.634 17.4 14.6942 17.8239 15.5015 18.5466C15.911 18.3585 16.3016 18.1326 16.6688 17.8716C16.4415 16.788 16.6222 15.6586 17.1764 14.7C17.7296 13.7409 18.6173 13.0198 19.6694 12.675C19.711 12.226 19.711 11.774 19.6694 11.325C18.617 10.9804 17.7289 10.2592 17.1755 9.30001C16.6213 8.34144 16.4406 7.21204 16.6679 6.12841C16.3008 5.86734 15.91 5.64134 15.5006 5.45341C14.6758 6.19225 13.6073 6.60055 12.5 6.60001C11.3924 6.60078 10.3235 6.19245 9.4985 5.45341C9.08912 5.64135 8.6983 5.86734 8.3312 6.12841C8.55851 7.21204 8.37775 8.34144 7.8236 9.30001C7.27043 10.2591 6.38268 10.9802 5.3306 11.325C5.28898 11.774 5.28898 12.226 5.3306 12.675C6.38302 13.0197 7.27112 13.7408 7.8245 14.7H7.8236ZM12.5 14.7C11.7839 14.7 11.0972 14.4155 10.5908 13.9092C10.0845 13.4028 9.8 12.7161 9.8 12C9.8 11.2839 10.0845 10.5972 10.5908 10.0908C11.0972 9.58447 11.7839 9.30001 12.5 9.30001C13.2161 9.30001 13.9028 9.58447 14.4092 10.0908C14.9155 10.5972 15.2 11.2839 15.2 12C15.2 12.7161 14.9155 13.4028 14.4092 13.9092C13.9028 14.4155 13.2161 14.7 12.5 14.7ZM12.5 12.9C12.7387 12.9 12.9676 12.8052 13.1364 12.6364C13.3052 12.4676 13.4 12.2387 13.4 12C13.4 11.7613 13.3052 11.5324 13.1364 11.3636C12.9676 11.1948 12.7387 11.1 12.5 11.1C12.2613 11.1 12.0324 11.1948 11.8636 11.3636C11.6948 11.5324 11.6 11.7613 11.6 12C11.6 12.2387 11.6948 12.4676 11.8636 12.6364C12.0324 12.8052 12.2613 12.9 12.5 12.9Z" fill="#667085" />
                                </svg>

                            </div>

                            <p className={style.first_para}>Settings</p>
                        </div>

                        {/* 4th component */}

                        <div className={style.single_component}>
                            <div className={style.image}>
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.3 12.0268V13.9078C8.48543 13.6198 7.61365 13.5315 6.75787 13.6502C5.90208 13.769 5.08728 14.0913 4.38189 14.5902C3.6765 15.0891 3.10111 15.7499 2.70405 16.5173C2.30699 17.2846 2.09984 18.136 2.1 19L0.300003 18.9991C0.299724 17.9001 0.551032 16.8156 1.03467 15.8288C1.51831 14.8419 2.22145 13.9788 3.0902 13.3057C3.95895 12.6326 4.97026 12.1673 6.04664 11.9455C7.12302 11.7236 8.2359 11.7512 9.3 12.0259V12.0268ZM7.5 10.9C4.5165 10.9 2.1 8.48351 2.1 5.50001C2.1 2.51651 4.5165 0.100006 7.5 0.100006C10.4835 0.100006 12.9 2.51651 12.9 5.50001C12.9 8.48351 10.4835 10.9 7.5 10.9ZM7.5 9.10001C9.489 9.10001 11.1 7.48901 11.1 5.50001C11.1 3.51101 9.489 1.90001 7.5 1.90001C5.511 1.90001 3.9 3.51101 3.9 5.50001C3.9 7.48901 5.511 9.10001 7.5 9.10001ZM12.7137 17.1226L15.8952 13.9411L17.1687 15.2137L12.7137 19.6687L9.5313 16.4863L10.8048 15.2137L12.7128 17.1226H12.7137Z" fill="#667085" />
                                </svg>

                            </div>

                            <p className={style.first_para}>Verification</p>
                        </div>

                        {/* 5th component */}

                        <div className={style.single_component}>
                            <div className={style.image}>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 16.5L7.2098 19.731L8.648 13.701L3.941 9.66901L10.1195 9.17401L12.5 3.45001L14.8805 9.17401L21.0599 9.66901L16.352 13.701L17.7902 19.731L12.5 16.5ZM12.5 14.3904L15.0353 15.9384L14.3459 13.0494L16.6022 11.1171L13.6412 10.8795L12.5 8.13721L11.3588 10.8795L8.3978 11.1171L10.6541 13.0494L9.9647 15.9384L12.5 14.3913V14.3904Z" fill="#667085" />
                                </svg>

                            </div>

                            <p className={style.first_para}>Bonuses</p>
                        </div>

                        {/* 6th component */}

                        <div className={style.single_component}>
                            <div className={style.image}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.19999 0.899994V15.3H16.6V17.1H0.399994V0.899994H2.19999ZM15.9637 3.86369L17.2363 5.13629L12.1 10.2726L9.39999 7.57349L5.53629 11.4363L4.26369 10.1637L9.39999 5.02739L12.1 7.72649L15.9637 3.86369Z" fill="#667085" />
                                </svg>

                            </div>

                            <p className={style.first_para}>MT5</p>
                        </div>

                        {/* 7th component */}

                        <div className={style.single_component}>
                            <div className={style.image}>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.145 12.045L20.6 16.5L16.145 20.955L14.8724 19.6824L17.1548 17.3991L5.29999 17.4V15.6H17.1548L14.8724 13.3176L16.145 12.045ZM8.85499 3.04501L10.1276 4.31761L7.84519 6.60001H19.7V8.40001H7.84519L10.1276 10.6824L8.85499 11.955L4.39999 7.50001L8.85499 3.04501Z" fill="#667085" />
                                </svg>

                            </div>

                            <p className={style.first_para}>Transfer</p>
                        </div>

                        {/* 8th component */}

                        <div className={style.single_component}>
                            <div className={style.image}>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 3C17.4707 3 21.5 7.0293 21.5 12C21.5 16.9707 17.4707 21 12.5 21C7.5293 21 3.5 16.9707 3.5 12H5.3C5.3 15.9762 8.5238 19.2 12.5 19.2C16.4762 19.2 19.7 15.9762 19.7 12C19.7 8.0238 16.4762 4.8 12.5 4.8C10.025 4.8 7.8416 6.0483 6.5465 7.95H8.9V9.75H3.5V4.35H5.3V6.6C6.9416 4.413 9.5561 3 12.5 3ZM13.4 7.5V11.6265L16.3187 14.5452L15.0452 15.8187L11.6 12.3717V7.5H13.4Z" fill="#667085" />
                                </svg>

                            </div>

                            <p className={style.first_para}>History</p>
                        </div>

                        {/* 9th component */}

                        <div className={style.single_component}>
                            <div className={style.image}>
                                <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.299988 19C0.299988 17.0904 1.05856 15.2591 2.40882 13.9088C3.75908 12.5586 5.59043 11.8 7.49999 11.8C9.40955 11.8 11.2409 12.5586 12.5912 13.9088C13.9414 15.2591 14.7 17.0904 14.7 19H0.299988ZM8.39999 13.6747V17.2H12.5931C12.2714 16.2923 11.7131 15.4869 10.9759 14.8672C10.2388 14.2474 9.34949 13.8357 8.39999 13.6747ZM6.59999 17.2V13.6747C5.65048 13.8357 4.76121 14.2474 4.02405 14.8672C3.2869 15.4869 2.72861 16.2923 2.40689 17.2H6.59999ZM7.49999 10.9C4.51649 10.9 2.09999 8.48351 2.09999 5.50001C2.09999 2.51651 4.51649 0.100006 7.49999 0.100006C10.4835 0.100006 12.9 2.51651 12.9 5.50001C12.9 8.48351 10.4835 10.9 7.49999 10.9ZM7.49999 9.10001C9.48899 9.10001 11.1 7.48901 11.1 5.50001C11.1 3.51101 9.48899 1.90001 7.49999 1.90001C5.51099 1.90001 3.89999 3.51101 3.89999 5.50001C3.89999 7.48901 5.51099 9.10001 7.49999 9.10001Z" fill="#667085" />
                                </svg>

                            </div>

                            <p className={style.first_para}>Partner</p>
                        </div>

                        {/* 10th component */}

                        <div className={style.single_component}>
                            <div className={style.image}>
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.25 8.375L3.375 10.25L5.25 12.125L7.125 10.25L5.25 8.375ZM9.75 0.875C7.1793 0.875 5.07333 2.86478 4.88822 5.38822C2.36478 5.57334 0.375 7.6793 0.375 10.25C0.375 12.9424 2.55761 15.125 5.25 15.125C7.8207 15.125 9.9267 13.1353 10.1118 10.6118C12.6353 10.4267 14.625 8.3207 14.625 5.75C14.625 3.05761 12.4424 0.875 9.75 0.875ZM9.99255 9.11645C9.56812 7.33445 8.16555 5.93184 6.38355 5.50749C6.5079 3.75672 7.96755 2.375 9.75 2.375C11.614 2.375 13.125 3.88604 13.125 5.75C13.125 7.53245 11.7433 8.9921 9.99255 9.11645ZM8.625 10.25C8.625 12.114 7.11398 13.625 5.25 13.625C3.38604 13.625 1.875 12.114 1.875 10.25C1.875 8.38602 3.38604 6.875 5.25 6.875C7.11398 6.875 8.625 8.38602 8.625 10.25ZM0.75 4.25C0.75 2.59314 2.09314 1.25 3.75 1.25H4.875V2.75H3.75C2.92157 2.75 2.25 3.42157 2.25 4.25V5.375H0.75V4.25ZM12.75 11.75V10.625H14.25V11.75C14.25 13.4068 12.9068 14.75 11.25 14.75H10.125V13.25H11.25C12.0785 13.25 12.75 12.5785 12.75 11.75Z" fill="#667085" />
                                </svg>

                            </div>

                            <p className={style.first_para}>Exchange</p>
                        </div>

                        {/* 11th component */}

                        <div className={style.single_component}>
                            <div className={style.image}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 9H2.3V17.1H0.5V9ZM3.2 10.8H5V17.1H3.2V10.8ZM13.1 5.4H14.9V17.1H13.1V5.4ZM15.8 7.2H17.6V17.1H15.8V7.2ZM6.8 0H8.6V17.1H6.8V0ZM9.5 1.8H11.3V17.1H9.5V1.8Z" fill="#667085" />
                                </svg>

                            </div>

                            <p className={style.first_para}>Analytics</p>
                        </div>

                    </div>
                </div>


                <BarChart />
            </div>

            <div className={style.divider_2}>

                <div className={style.trading_accounts}>

                    <div className={style.trading_text_1}>Trading Accounts</div>

                    <div className={style.trading_acc_child_1}>

                        <div className={style.tra_acc_child_text_1}>Master Account</div>

                        <div className={style.tra_acc_child_btns}>

                            <div className={style.tra_acc_child_btns_1}>CTrader</div>
                            <div className={style.tra_acc_child_btns_2}>#273728</div>
                        </div>

                        <div className={style.tra_acc_child_flexbox}>

                            <div className={style.tra_acc_child_f_child}>
                                <div className={style.tra_acc_child_f_child_1} >0.00</div>
                                <div className={style.tra_acc_child_f_child_2}>USD</div>
                            </div>

                            <div className={style.tra_acc_child_img}>
                                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.66987 3.12403L1.7939 11L0.5 9.7061L8.37505 1.83013H1.43428V0H11.5V10.0657H9.66987V3.12403Z" fill="#667085" />
                                </svg>

                            </div>
                        </div>
                    </div>

                    <div className={style.trading_acc_child_1}>

                        <div className={style.tra_acc_child_text_1}>Master Account</div>

                        <div className={style.tra_acc_child_btns}>

                            <div className={style.tra_acc_child_btns_1}>CTrader</div>
                            <div className={style.tra_acc_child_btns_2}>#273728</div>
                        </div>

                        <div className={style.tra_acc_child_flexbox}>

                            <div className={style.tra_acc_child_f_child}>
                                <div className={style.tra_acc_child_f_child_1} >0.00</div>
                                <div className={style.tra_acc_child_f_child_2}>USD</div>
                            </div>

                            <div className={style.tra_acc_child_img}>
                                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.66987 3.12403L1.7939 11L0.5 9.7061L8.37505 1.83013H1.43428V0H11.5V10.0657H9.66987V3.12403Z" fill="#667085" />
                                </svg>

                            </div>
                        </div>
                    </div>

                </div>

                <div className={style.open_trades}>


                    <div className={style.d3_text_1}>Open Trades</div>

                    <div className={style.d3_container_1}>

                        <div className={style.d3_flexbox}>

                            <div className={style.d3_flexbox_child}>
                                <div className={style.d3_flexbox_child_t1}>GBPUSD</div>
                                <div className={style.d3_flexbox_child_t2}>Long</div>
                            </div>

                            <div className={style.d3_flexbox_child_text}>0.12</div>

                        </div>

                        <div className={style.d3_flexbox_2}>
                            <div className={style.d3_flexbox_2_text_1} >+56.00</div>
                            <div className={style.d3_flexbox_2_text_2}>USD</div>
                        </div>

                    </div>


                    <div className={style.d3_container_1}>

                        <div className={style.d3_flexbox}>
                            <div className={style.d3_flexbox_child}>
                                <div className={style.d3_flexbox_child_t1}>USDJPY</div>
                                <div className={style.d3_flexbox_child_t2}>Long</div>
                            </div>
                            <div className={style.d3_flexbox_child_text} >0.52</div>
                        </div>

                        <div className={style.d3_flexbox_2}>
                            <div className={style.d3_flexbox_2_text_1} style={{ color: '#EC221F' }}>-0.09</div>
                            <div className={style.d3_flexbox_2_text_2}>USD</div>
                        </div>

                    </div>


                    <div className={style.d3_container_1}>

                        <div className={style.d3_flexbox}>
                            <div className={style.d3_flexbox_child}>
                                <div className={style.d3_flexbox_child_t1}>EURUSD</div>
                                <div className={style.d3_flexbox_child_t2}>Short</div>
                            </div>
                            <div className={style.d3_flexbox_child_text}>0.34</div>
                        </div>

                        <div className={style.d3_flexbox_2}>
                            <div className={style.d3_flexbox_2_text_1} style={{ color: '#EC221F' }}>-1.09</div>
                            <div className={style.d3_flexbox_2_text_2}>USD</div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Hero;