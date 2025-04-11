'use client'

import { QueryClientProvider } from "@tanstack/react-query"
import { getQueryClient } from "./get-query-client";

import theme from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';


export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (<QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </QueryClientProvider>)
}