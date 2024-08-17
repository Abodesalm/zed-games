

export default function Requirements({minCPU , minGPU , minRAM , minVRAM , recCPU , recGPU , recRAM , recVRAM , storage}) {

  const unknown = (v)=>{
    if(v===0) return v
    else if(!v) return <p className="w-full text-center inline">--</p>
    else return <p className="inline">{v}</p>
  }
  const gbmb=(el)=>{
    if(el >= 300) return 'mb'
    else return 'GB'
  }

  return (
    <div className="">
      <table className="w-full bg-bglight dark:bg-darker text-center" id="req">
        <thead>
          <th></th>
          <th>Minimum</th>
          <th>Recomended</th>
        </thead>
        <tbody>
          <tr>
            <td>CPU</td>
            <td>{unknown(minCPU)}</td>
            <td>{unknown(recCPU)}</td>
          </tr>
          <tr>
            <td>GPU</td>
            <td>{unknown(minGPU)}</td>
            <td>{unknown(recGPU)}</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>{unknown(minRAM)} {gbmb(minRAM)}</td>
            <td>{unknown(recRAM)} {gbmb(recRAM)}</td>
          </tr>
          <tr>
            <td>VRAM</td>
            <td>{unknown(minVRAM)} {gbmb(minVRAM)}</td>
            <td>{unknown(recVRAM)} {gbmb(recVRAM)}</td>
          </tr>
          <tr>
            <td>Storage</td>
            <td colSpan={2}>{unknown(storage)} {gbmb(storage)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// minCPU , minGPU , minRAM , minVRAM , recCPU , recGPU , recRAM , recVRAM , storage

