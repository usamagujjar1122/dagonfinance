import { Stack, Typography } from "@mui/material";

const Rules = () => {
    return (
        <>
            <Stack sx={{ backgroundImage: 'url(img/mainbanner.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', padding: { xs: "38px 20px", md: '38px 50px' } }}>
                <Typography sx={{ fontSize: { xs: '18px', md: '32px' } }}>RULES & <span style={{ fontWeight: 'bold' }}> AGGREMENTS</span></Typography>
            </Stack>
            <Stack sx={{ padding: { xs: "20px 10px", md: "30px" }, background: "url(img/featuresbg.png) no-repeat bottom center #182128" }}>
                <Stack sx={{ padding: { xs: "20px 10px", md: "30px" }, backgroundColor: '#2a3842', gap: '10px' }}>
                    <Typography sx={{ fontWeight: "500", color: 'white' }}>Persons who have reached the age of majority in accordance with the legislation of the country of which they are citizens are allowed to participate in the investment project.</Typography>
                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '18px', md: '20px', color: "#edd50e" } }}>THE RESPONSIBILITY OF THE COMPANY:</Typography>
                    <Typography sx={{ fontWeight: "500", color: 'white' }}>compliance with financial discipline, involving the timely accrual of dividends in accordance with the terms of investment plans;
                        ensuring the uninterrupted operation of the site using technical and software methods;</Typography>
                    <Typography sx={{ fontWeight: "500", color: 'white' }}>introduction of modern methods of personal data protection;
                        creation of conditions for successful investment activity of clients, including information and technical support.</Typography>
                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '18px', md: '20px', color: "#edd50e" } }}>INVESTOR'S RESPONSIBILITY:</Typography>
                    <Typography sx={{ fontWeight: "500", color: 'white' }}>create one account from one IP address;</Typography>
                    <Typography sx={{ fontWeight: "500", color: 'white' }}>inadmissibility of creating an account using your own referral link;</Typography>
                    <Typography sx={{ fontWeight: "500", color: 'white' }}>inadmissibility of any fraudulent actions that may cause financial or reputational damage to the company or other project participants.
                    </Typography>
                    <Typography sx={{ fontWeight: "500", color: 'white' }}>Deposit and withdrawal of funds does not involve the accrual of fees, except for those amounts that are charged by payment systems. Registration on the company's website means automatic consent to the rules of cooperation, as well as free consent to the processing of personal data Participation in the affiliate program Each Internet user can be our partner by attracting new members using their own referral link. By placing it on any available online resources, you will be able to get affiliate commission, the amount of which depends on the number of your referrals and the size of their deposits (no restrictions). To create a network of referrals, you can use a personal blog, specialized forums, and pages in social networks, the possibility of your own website and advertising campaigns in search engines. It is in your interest to attract as many users as possible to ensure the constant growth of your income. Affiliate Commission is charged up to 20%, depending on which plan the user has made a deposit attracted by you.

                    </Typography>
                    <Typography sx={{ fontWeight: "500", color: 'white' }}>The reward is credited to the partner's account immediately after receipt of funds to the balance of the referral's account and can be used as an investment contribution. Withdrawals are only available to active investors.

                    </Typography>
                    <Typography sx={{ fontWeight: "500", color: 'white' }}>1. Registration
                    </Typography>
                    <Typography sx={{ fontWeight: "500", color: 'white' }}>Registration on the site is compulsory procedure that will give you access to participate in the investment project. To open account, fill in registration forms, putting your data and email address. It is also necessary to come up with a strong password that will ensure the security of your personal data and funds.</Typography>
                    <Typography sx={{ fontWeight: "500", color: 'white' }}>2. Deposit replenishment</Typography>
                    <Typography sx={{ fontWeight: "500", color: 'white' }}>To replenish the money to your deposit, you can use one of the electronic payment systems recommended for use on our website. Please note that the accrual of fees is possible only from the payment systems - the company TopMaklers does not charge its customers any additional payments. The size of the deposit should correspond to the size of the chosen tariff plan. It also determines the amount of dividends credited to your account automatically every 24 hours. Each investor has the right to independently determine the amount of investment, based on the proposed conditions and its own financial capabilities.
                    </Typography>
                    <Typography sx={{ fontWeight: "500", color: 'white' }}>3. Withdrawal of funds
                    </Typography>
                    <Typography sx={{ fontWeight: "500", color: 'white' }}>You can withdraw your profit in the same ways that you used to replenish the deposit. To make this transaction, make sure that the amount in your account exceeds the minimum required amount of $3, and then fill out a withdrawal request, which will be processed within 48 working hours (6 days, regardless of the day) manually.
                    </Typography>
                    <Typography sx={{ fontWeight: "500", color: 'white' }}>4. Participation in the affiliate program</Typography>
                    <Typography sx={{ fontWeight: "500", color: 'white' }}>To participate in the affiliate program, you should use your unique referral link (you can find it in your account) when advertising our company. Users who have accessed our website through this link will automatically become your referrals, and their deposit will result in the accrual of affiliate fees to you in the amounts provided for by the terms of the affiliate program for each level of the referral network.
                    </Typography>
                </Stack>
            </Stack>
        </>
    );
}

export default Rules;