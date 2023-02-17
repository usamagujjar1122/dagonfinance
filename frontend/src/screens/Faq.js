import { Stack, Typography } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Faq = () => {
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <>
            <Stack sx={{ backgroundImage: 'url(img/mainbanner.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', padding: { xs: "38px 20px", md: '38px 50px' } }}>
                <Typography sx={{ fontSize: { xs: '18px', md: '32px' } }}>F.A.Q & <span style={{ fontWeight: 'bold' }}> ANSWERS</span></Typography>
            </Stack>
            <Stack sx={{ padding: { xs: "20px 10px", md: '20px 50px' }, backgroundColor: '#f7f7f7' }}>
                <Typography sx={{ fontWeight: "bold", color: 'gray', fontSize: '22px' }}>GENERAL</Typography>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>How do you control your investment funds?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Investments are necessary to improve the company's competitiveness and reach a higher level of development. The received investments are aimed at improving the material and technical base of the company, developing and implementing software, attracting highly qualified professionals: economists, IT-specialists, lawyers, who provide uninterrupted quality work of our service for financial transactions using cryptocurrency. In addition, additional funds are needed for advertising events in the media space. All these expenses stimulate the growth of the company's income, which allows improving the conditions for investors.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>Who can be your investor?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            It can be any adult citizen who has free financial resources and the desire to get a stable passive income. To assign the status of an investor, it is necessary to register by filling out the proposed form and replenish your deposit.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>How can I fill up my deposit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            To deposit and withdraw money, our clients are offered to use electronic payment systems. The site provides a complete list of ways of financial transactions.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>When will I make a profit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Profit is credited to the investor's account every 24 hours in the amounts specified in the investment plan. Please note that the deposit is included in the payment, and cannot be withdrawn before the deadline.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>When can I withdraw my profit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Profit is available for withdrawal when the amount on the balance is $3 for Payeer. Cryptocurrencies don't have fixed minimal for withdraw. Check it, please, in different periods of time:
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>Is there a guarantee of deposit's safety?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Yes, the company is ready to perform its financial obligations under any conditions. For this purpose, a reserve fund was created, the funds from which are intended for payments to investors under any unforeseen circumstances.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>Is there a referral reward system in your company?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Yes. Our marketing specialists have developed an effective referral reward system, which is based on your chosen referral plan:
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>I have asked for money. How soon will I get the payment?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Payments are made manually within 48 working hours (6 days, regardless of the day)
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>Who can withdraw money, as well as charges from the bonus deposit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Withdrawals are only accessible to active investors.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>How many accounts can I create in BLUE-VISTA CAPITALS, LLC?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            You can create one account from one IP address.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>Who is the "active investor"?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            The active investor is an investor having a company minimum allowed deposit which is $20.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>ETHRIC INVEST, LLC open 7 days a week, or there are some weekend?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Yes. ETHRIC INVEST, LLC Company works 7 days a week.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Stack>
        </>
    );
}

export default Faq;