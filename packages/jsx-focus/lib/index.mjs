import {
  enableBodyScroll as enableBodyScrollProd, 
  disableBodyScroll as disableBodyScrollProd,
  Portal as PortalProd,
  TrapFocus as TrapFocusProd,
  canUseDOM as canUseDOMProd,
  hasWindow as hasWindowProd,
  isIosDevice as isIosDeviceProd,
  setRef as setRefProd,
  getOwnerDocument as getOwnerDocumentProd,
  useAriaHidden as useAriaHiddenProd,
  useForceUpdate as useForceUpdateProd,
  useForkRef as useForkRefProd,
  useLayoutEffect as useLayoutEffectProd,
  useScrollLock as useScrollLockProd
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

export const enableBodyScroll = process.env.NODE_ENV !== 'production' ? enableBodyScrollDev : enableBodyScrollProd
export const disableBodyScroll = process.env.NODE_ENV !== 'production' ? disableBodyScrollDev : disableBodyScrollProd
export const Portal = process.env.NODE_ENV !== 'production' ? PortalDev : PortalProd
export const TrapFocus = process.env.NODE_ENV !== 'production' ? TrapFocusDev : TrapFocusProd
export const canUseDOM = process.env.NODE_ENV !== 'production' ? canUseDOMDev : canUseDOMProd
export const hasWindow = process.env.NODE_ENV !== 'production' ? hasWindowDev : hasWindowProd
export const isIosDevice = process.env.NODE_ENV !== 'production' ? isIosDeviceDev : isIosDeviceProd
export const setRef = process.env.NODE_ENV !== 'production' ? setRefDev : setRefProd
export const getOwnerDocument = process.env.NODE_ENV !== 'production' ? getOwnerDocumentDev : getOwnerDocumentProd
export const useAriaHidden = process.env.NODE_ENV !== 'production' ? useAriaHiddenDev : useAriaHiddenProd
export const useForceUpdate = process.env.NODE_ENV !== 'production' ? useForceUpdateDev : useForceUpdateProd
export const useForkRef = process.env.NODE_ENV !== 'production' ? useForkRefDev : useForkRefProd
export const useLayoutEffect = process.env.NODE_ENV !== 'production' ? useLayoutEffectDev : useLayoutEffectProd
export const useScrollLock = process.env.NODE_ENV !== 'production' ? useScrollLockDev : useScrollLockProd