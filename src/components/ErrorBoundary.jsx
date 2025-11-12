// src/components/ErrorBoundary.jsx
import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(p){ super(p); this.state = { hasError:false, err:null }; }
  static getDerivedStateFromError(err){ return { hasError:true, err }; }
  componentDidCatch(err, info){ console.error('ErrorBoundary', err, info); }
  render(){
    if(this.state.hasError){
      return (
        <pre style={{padding:24,color:'#b91c1c',whiteSpace:'pre-wrap'}}>
          {String(this.state.err)}
        </pre>
      );
    }
    return this.props.children;
  }
}
