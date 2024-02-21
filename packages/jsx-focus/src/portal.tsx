/*
 * Reach UI Portal
 * Modified to allow string refs
 * ------------------------------
 * From https://github.com/reach/reach-ui/blob/develop/packages/portal/src/index.tsx
 * MIT License at https://github.com/reach/reach-ui/blob/develop/LICENSE
 */
import React from 'react'
import { createPortal } from 'react-dom'
import { useLayoutEffect, useForceUpdate } from './hooks'
import { hasWindow } from './utils'

const getRef = (ref?: PortalRef): Node | null => {
  if (typeof ref === 'string') {
    if (hasWindow()) {
      const value = document.querySelector(ref)
      if (value) return value
    }
    return null
  }
  return ref?.current ?? null
}

type ReactNodeDom = Parameters<typeof createPortal>[0]

const Portal: React.FC<PortalProps> = ({
  children,
  type = 'div',
  containerRef = 'body'
}) => {
  const mountNode = React.useRef<HTMLDivElement | null>(null)
  const portalNode = React.useRef<HTMLElement | null>(null)
  const forceUpdate = useForceUpdate()

  useLayoutEffect(() => {
    if (!mountNode.current) return
    const ownerDocument = mountNode.current.ownerDocument
    const body = getRef(containerRef) || ownerDocument.body
    portalNode.current = ownerDocument?.createElement(type)
    body.appendChild(portalNode.current)
    forceUpdate()
    return () => {
      if (portalNode.current && body) {
        body.removeChild(portalNode.current)
      }
    }
  }, [type, forceUpdate, containerRef])

  return portalNode.current ? (
    createPortal(children as ReactNodeDom, portalNode.current)
  ) : (
    <span ref={mountNode} />
  )
}

if (__isDev__) {
  Portal.displayName = 'Portal'
}

type PortalRef = React.RefObject<Node> | string

export type PortalProps = {
  children: React.ReactNode
  type?: string
  containerRef?: PortalRef
}

export default Portal
