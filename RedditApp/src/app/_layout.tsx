import { Slot, Stack } from "expo-router";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { tokenCache } from "../../cache";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
    throw new Error("Missing publishable key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in .env")
}

export default function RootLayoutNav() {
    return (
        <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
            <ClerkLoaded>
                <Slot />
            </ClerkLoaded>
        </ClerkProvider>
    )
}