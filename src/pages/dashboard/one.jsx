import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Grid from '@mui/material/Unstable_Grid2';
import { Iconify } from 'src/components/iconify';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';
import { BankingExpensesCategories } from 'src/sections/dashboard/banking-expenses-categories';
import { BankingOverview } from 'src/sections/dashboard/banking-overview';
import { BookingAvailable } from 'src/sections/dashboard/booking-available';
import { EcommerceCurrentBalance } from 'src/sections/dashboard/EcommerceCurrentBalance';

// ----------------------------------------------------------------------

const metadata = { title: `Banking | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <DashboardContent maxWidth="xl">
        <Grid container spacing={3}>
          <Grid xs={12} md={5} lg={5}>
            <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
              <EcommerceCurrentBalance
                title="Current balance"
                earning={25500}
                refunded={1600}
                orderTotal={287650}
                currentBalance={187650}
              />

              <BookingAvailable
                title="Usage available"
                chart={{
                  series: [
                    { label: 'Sold out', value: 120 },
                    { label: 'Available', value: 66 },
                  ],
                }}
              />
            </Box>
          </Grid>

          <Grid xs={12} md={7} lg={7}>
            <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
              <BankingOverview />

              <BankingExpensesCategories
                title="Expenses categories"
                chart={{
                  series: [
                    { label: 'Entertainment', value: 22 },
                    { label: 'Fuel', value: 18 },
                    { label: 'Fast food', value: 16 },
                    { label: 'Cafe', value: 17 },
                    { label: 'Сonnection', value: 14 },
                    { label: 'Healthcare', value: 22 },
                    { label: 'Fitness', value: 10 },
                    { label: 'Supermarket', value: 21 },
                  ],
                  icons: [
                    <Iconify icon="streamline:dices-entertainment-gaming-dices-solid" />,
                    <Iconify icon="maki:fuel" />,
                    <Iconify icon="ion:fast-food" />,
                    <Iconify icon="maki:cafe" />,
                    <Iconify icon="basil:mobile-phone-outline" />,
                    <Iconify icon="solar:medical-kit-bold" />,
                    <Iconify icon="ic:round-fitness-center" />,
                    <Iconify icon="solar:cart-3-bold" />,
                  ],
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </DashboardContent>
    </>
  );
}
