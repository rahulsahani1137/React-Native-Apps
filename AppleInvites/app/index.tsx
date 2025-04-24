import { Stack, Link, Redirect } from 'expo-router';
import React from 'react';
import { Container } from '~/components/Container';

export default function Home() {
  return (
      <Redirect href="/welcome" />
      // <>
      //   <Stack.Screen options={{ title: 'Home' }} />
      //   <Container>
      //     <Link href="/welcome">Welcome Screen</Link> 
      //   </Container>
      // </>
  );
}
