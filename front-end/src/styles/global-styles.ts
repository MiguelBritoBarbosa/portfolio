import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
    body {
        font-size: 20px;
    }

    .radix-themes {
    --default-font-family: var(--font-montserrat);
    }
    :root, .light, .light-theme {
  --violet-1: #fbfbfe;
  --violet-2: #f7f7ff;
  --violet-3: #f0efff;
  --violet-4: #e5e3ff;
  --violet-5: #dbd7ff;
  --violet-6: #cdc7ff;
  --violet-7: #bab1ff;
  --violet-8: #a292ff;
  --violet-9: #7c4dff;
  --violet-10: #6e47e2;
  --violet-11: #663cd6;
  --violet-12: #321c6f;

  --violet-a1: #fbfbffed;
  --violet-a2: #f7f7ff;
  --violet-a3: #f0efff;
  --violet-a4: #e5e3ff;
  --violet-a5: #dbd7ff;
  --violet-a6: #cdc7ff;
  --violet-a7: #bab1ff;
  --violet-a8: #a292ff;
  --violet-a9: #7c4dff;
  --violet-a10: #3600ddb8;
  --violet-a11: #3700cdc3;
  --violet-a12: #19005fe3;

  --violet-contrast: #fff;
  --violet-surface: #f5f5ffcc;
  --violet-indicator: #7c4dff;
  --violet-track: #7c4dff;
}

@supports (color: color(display-p3 1 1 1)) {
  @media (color-gamut: p3) {
    :root, .light, .light-theme {
      --violet-1: oklch(98.8% 0.004 288.2);
      --violet-2: oklch(97.9% 0.012 288.2);
      --violet-3: oklch(95.8% 0.026 288.2);
      --violet-4: oklch(92.9% 0.054 288.2);
      --violet-5: oklch(89.9% 0.078 288.2);
      --violet-6: oklch(85.9% 0.1 288.2);
      --violet-7: oklch(80.1% 0.124 288.2);
      --violet-8: oklch(72.3% 0.164 288.2);
      --violet-9: oklch(57.9% 0.247 288.2);
      --violet-10: oklch(53.4% 0.22 288.2);
      --violet-11: oklch(50.2% 0.22 288.2);
      --violet-12: oklch(31.3% 0.134 288.2);

      --violet-a1: color(display-p3 0.984 0.984 1 / 0.924);
      --violet-a2: color(display-p3 0.969 0.969 1 / 0.924);
      --violet-a3: color(display-p3 0.937 0.933 1 / 0.924);
      --violet-a4: color(display-p3 0.882 0.871 1 / 0.847);
      --violet-a5: color(display-p3 0.812 0.8 1 / 0.77);
      --violet-a6: color(display-p3 0.714 0.686 1 / 0.693);
      --violet-a7: color(display-p3 0.486 0.435 1 / 0.539);
      --violet-a8: color(display-p3 0.188 0.086 1 / 0.462);
      --violet-a9: color(display-p3 0 0 1 / 0.308);
      --violet-a10: color(display-p3 0.173 0 0.82 / 0.714);
      --violet-a11: color(display-p3 0.176 0 0.761 / 0.757);
      --violet-a12: color(display-p3 0.078 0 0.353 / 0.887);

      --violet-contrast: #fff;
      --violet-surface: color(display-p3 0.961 0.961 1 / 0.8);
      --violet-indicator: oklch(57.9% 0.247 288.2);
      --violet-track: oklch(57.9% 0.247 288.2);
    }
  }
}

    .dark, .dark-theme {
  --violet-1: #100e20;
  --violet-2: #17142b;
  --violet-3: #261a52;
  --violet-4: #331b71;
  --violet-5: #3c2481;
  --violet-6: #462f91;
  --violet-7: #543ca8;
  --violet-8: #6749cc;
  --violet-9: #7c4dff;
  --violet-10: #6d50d4;
  --violet-11: #b6a2ff;
  --violet-12: #e0ddff;

  --violet-a1: #0200f211;
  --violet-a2: #482dfe1c;
  --violet-a3: #5e32fe46;
  --violet-a4: #662aff67;
  --violet-a5: #6d3aff78;
  --violet-a6: #7348fe8a;
  --violet-a7: #7b55ffa2;
  --violet-a8: #7e58fec9;
  --violet-a9: #7c4dff;
  --violet-a10: #815effd1;
  --violet-a11: #b6a2ff;
  --violet-a12: #e0ddff;

  --violet-contrast: #fff;
  --violet-surface: #1d174580;
  --violet-indicator: #7c4dff;
  --violet-track: #7c4dff;
}

@supports (color: color(display-p3 1 1 1)) {
  @media (color-gamut: p3) {
    .dark, .dark-theme {
      --violet-1: oklch(17.8% 0.035 288.2);
      --violet-2: oklch(20.8% 0.044 288.2);
      --violet-3: oklch(27% 0.097 288.2);
      --violet-4: oklch(31.4% 0.139 288.2);
      --violet-5: oklch(35.2% 0.148 288.2);
      --violet-6: oklch(39.3% 0.153 288.2);
      --violet-7: oklch(44.6% 0.165 288.2);
      --violet-8: oklch(51.3% 0.193 288.2);
      --violet-9: oklch(57.9% 0.247 288.2);
      --violet-10: oklch(53.4% 0.193 288.2);
      --violet-11: oklch(77.7% 0.195 288.2);
      --violet-12: oklch(91.3% 0.064 288.2);

      --violet-a1: color(display-p3 0.004 0 1 / 0.059);
      --violet-a2: color(display-p3 0.263 0.184 1 / 0.101);
      --violet-a3: color(display-p3 0.353 0.2 0.996 / 0.261);
      --violet-a4: color(display-p3 0.384 0.18 1 / 0.387);
      --violet-a5: color(display-p3 0.416 0.243 1 / 0.45);
      --violet-a6: color(display-p3 0.447 0.302 1 / 0.517);
      --violet-a7: color(display-p3 0.471 0.349 0.996 / 0.61);
      --violet-a8: color(display-p3 0.486 0.365 1 / 0.757);
      --violet-a9: color(display-p3 0.471 0.318 0.996 / 0.963);
      --violet-a10: color(display-p3 0.502 0.384 1 / 0.79);
      --violet-a11: color(display-p3 0.722 0.655 1 / 0.975);
      --violet-a12: color(display-p3 0.886 0.878 1 / 0.988);

      --violet-contrast: #fff;
      --violet-surface: color(display-p3 0.11 0.086 0.251 / 0.5);
      --violet-indicator: oklch(57.9% 0.247 288.2);
      --violet-track: oklch(57.9% 0.247 288.2);
    }
  }
}
`;
