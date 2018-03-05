
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'
    import universal, { setHasBabelPlugin } from 'react-universal-component'

    

    setHasBabelPlugin()

    const universalOptions = {
      loading: () => null,
      error: () => {
        console.error(props.error);
        return <div>An unknown error has occured loading this page. Please reload your browser and try again.</div>;
      },
    }

      const t_0 = universal(import('../src/containers/Home'), universalOptions)
const t_1 = universal(import('../src/containers/Speakers'), universalOptions)
const t_2 = universal(import('../src/containers/CallForPapers'), universalOptions)
const t_3 = universal(import('../src/containers/About'), universalOptions)
const t_4 = universal(import('../src/containers/Blog'), universalOptions)
const t_5 = universal(import('../src/containers/404'), universalOptions)
    

    // Template Map
    const templateMap = {
      t_0,
t_1,
t_2,
t_3,
t_4,
t_5
    }

    // Template Tree
    const templateTree = {c:{"404":{t:"t_5"},"/":{t:"t_0"},"speakers":{t:"t_1"},"call-for-papers":{t:"t_2"},"about":{t:"t_3"},"blog":{t:"t_4"}}}

    // Get template for given path
    const getComponentForPath = path => {
      const parts = path === '/' ? ['/'] : path.split('/').filter(d => d)
      let cursor = templateTree
      try {
        parts.forEach(part => {
          cursor = cursor.c[part]
        })
        return templateMap[cursor.t]
      } catch (e) {
        return false
      }
    }

    if (typeof document !== 'undefined') {
      window.reactStaticGetComponentForPath = getComponentForPath
    }

    export default class Routes extends Component {
      render () {
        const { component: Comp, render, children } = this.props
        const renderProps = {
          templateMap,
          templateTree,
          getComponentForPath
        }
        if (Comp) {
          return (
            <Comp
              {...renderProps}
            />
          )
        }
        if (render || children) {
          return (render || children)(renderProps)
        }

        // This is the default auto-routing renderer
        return (
          <Route path='*' render={props => {
            let Comp = getComponentForPath(props.location.pathname)
            if (!Comp) {
              Comp = getComponentForPath('404')
            }
            return Comp && <Comp {...props} />
          }} />
        )
      }
    }
    