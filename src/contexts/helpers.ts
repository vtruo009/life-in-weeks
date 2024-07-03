import React from "react";
import { SettingsContext } from "./SettingsContext";

export function useSettingsContext() {
    return React.useContext(SettingsContext);
}
