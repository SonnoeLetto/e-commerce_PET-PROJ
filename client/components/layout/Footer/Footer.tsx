import { Typography, Link as MuiLink } from '@mui/material';
import { Constrained } from '@components/layout/containers';
import { FooterWrapper, FooterInner, FooterLinks } from './Footer.styled';

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
      <FooterWrapper>
        <Constrained>
          <FooterInner>
            <Typography variant="body2">© {year} My Shop</Typography>
  
            <FooterLinks aria-label="Footer navigation">
              <MuiLink href="/privacy" underline="none">Privacy</MuiLink>
              <MuiLink href="/terms" underline="none">Terms</MuiLink>
              <MuiLink href="/contact" underline="none">Contact</MuiLink>
            </FooterLinks>
          </FooterInner>
        </Constrained>
      </FooterWrapper>
    )
}