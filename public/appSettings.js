/*
appSettings.js

This file holds helper functions for getting user appSettings

*/

async function getDefaultSettings() {
    try {
        const response = await fetch(`/api/users/settings${window.location.search}`, { headers: { 'Accept': 'application/json' } });
        const settings = await response.json()
        return settings
    } catch (error) {
        console.error(error)
    }
}