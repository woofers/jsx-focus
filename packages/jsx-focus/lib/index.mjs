import {
  enableBodyScroll, 
  disableBodyScroll,
  Portal,
  TrapFocus,
  canUseDOM,
  hasWindow,
  isIosDevice,
  setRef,
  getOwnerDocument,
  useAriaHidden,
  useForceUpdate,
  useForkRef,
  useLayoutEffect,
  useScrollLock
} from './jsx-focus.mjs'
import {
  enableBodyScroll as enableBodyScrollDev, 
  disableBodyScroll as disableBodyScrollDev,
  Portal as PortalDev,
  TrapFocus as TrapFocusDev,
  canUseDOM as canUseDOMDev,
  hasWindow as hasWindowDev,
  isIosDevice as isIosDeviceDev,
  setRef as setRefDev,
  getOwnerDocument as getOwnerDocumentDev,
  useAriaHidden as useAriaHiddenDev,
  useForceUpdate as useForceUpdateDev,
  useForkRef as useForkRefDev,
  useLayoutEffect as useLayoutEffectDev,
  useScrollLock as useScrollLockDev
} from './jsx-focus.dev.mjs'

export const enableBodyScroll = process.env.NODE_ENV !== 'production' ? enableBodyScrollDev : enableBodyScroll
export const disableBodyScroll = process.env.NODE_ENV !== 'production' ? disableBodyScrollDev : disableBodyScroll
export const Portal = process.env.NODE_ENV !== 'production' ? PortalDev : Portal
export const TrapFocus = process.env.NODE_ENV !== 'production' ? TrapFocusDev : TrapFocus
export const canUseDOM = process.env.NODE_ENV !== 'production' ? canUseDOMDev : canUseDOM
export const hasWindow = process.env.NODE_ENV !== 'production' ? hasWindowDev : hasWindow
export const isIosDevice = process.env.NODE_ENV !== 'production' ? isIosDeviceDev : isIosDevice
export const setRef = process.env.NODE_ENV !== 'production' ? setRefDev : setRef
export const getOwnerDocument = process.env.NODE_ENV !== 'production' ? getOwnerDocumentDev : getOwnerDocument
export const useAriaHidden = process.env.NODE_ENV !== 'production' ? useAriaHiddenDev : useAriaHidden
export const useForceUpdate = process.env.NODE_ENV !== 'production' ? useForceUpdateDev : useForceUpdate
export const useForkRef = process.env.NODE_ENV !== 'production' ? useForkRefDev : useForkRef
export const useLayoutEffect = process.env.NODE_ENV !== 'production' ? useLayoutEffectDev : useLayoutEffect
export const useScrollLock = process.env.NODE_ENV !== 'production' ? useScrollLockDev : useScrollLock