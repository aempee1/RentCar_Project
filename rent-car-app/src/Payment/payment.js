import { Box, Button, Card, CardContent, Container, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react'
import Mobile_banking from './Mobile_banking';
import Order_summary from './Order_summary';
import Slip_page from './Slip_page';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTranslation } from 'react-i18next';
import './anim.css'

function Payment() {

    const { t, i18n } = useTranslation()

    const steps = [
        t('Mobile Banking'),
        t('Order Summary'),
        t('Bill'),
    ];
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [paymentstep, setPaymentstep] = useState([
        <Mobile_banking />,
        <Order_summary />,
        <Slip_page />

    ])

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const changepage = (lang) => {
        window.location.href = "/" + lang
    }

    return (
        <Container maxWidth='md' sx={{
            marginTop: "7rem",
            marginBottom : '3rem'
        }}>
            <Card>
                <CardContent>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel  {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: "3rem",
                                    flexDirection: "column",
                                    height: '30rem'
                                }}>
                                <CheckCircleIcon sx={{
                                    fontSize: 150,
                                    margin: "0 auto",
                                    color: "green"
                                }}  className="anim" />
                                <Typography variant='h6' fontWeight='bold'>
                                    {t("Thank you for your renting.")}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={() => changepage("")} sx={{ pl: 4 }}>{t("Back to Home")}</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '1rem',
                                height: '30rem'
                            }}>
                                {paymentstep[activeStep]}
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    {t("Back")}
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? t('Finish') : t('Next')}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </CardContent>
            </Card>
        </Container>
    )
}

export default Payment