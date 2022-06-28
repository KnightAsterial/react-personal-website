import './ReadingsPage.css';

function ReadingsPage() {
  return (
    <main className="readings-page container">
      <h1>Selected Reading List</h1>
      <p>Here are some articles I have found to help with my learning over the years!</p>

      <h2>Distributed Systems</h2>
      <p>Consistency Models</p>
      <ul>
        <li>Linearizability vs. Serializability: <a className="text-link" target="_blank" rel="noopener noreferrer" href="http://www.bailis.org/blog/linearizability-versus-serializability/">http://www.bailis.org/blog/linearizability-versus-serializability/</a></li>
        <li>Linearizability vs. Serializability (More Concrete): <a className="text-link" target="_blank" rel="noopener noreferrer" href="https://www.cockroachlabs.com/blog/consistency-model/ ">https://www.cockroachlabs.com/blog/consistency-model/ </a></li>
      </ul>
      <p>Consensus</p>
      <ul>
        <li>Animation of the Raft Consensus Algorithm: <a className="text-link" target="_blank" rel="noopener noreferrer" href="http://thesecretlivesofdata.com/raft/">http://thesecretlivesofdata.com/raft/</a></li>
      </ul>

      <h2>Databases</h2>
      <p>Storage</p>
      <ul>
        <li>Log Structured Merge Trees: <a className="text-link" target="_blank" rel="noopener noreferrer" href="http://www.benstopford.com/2015/02/14/log-structured-merge-trees/">http://www.benstopford.com/2015/02/14/log-structured-merge-trees/</a></li>
      </ul>
      <p>SQL Optimizers</p>
      <ul>
        <li>How Volcano/Cascades Builds On System-R: <a className="text-link" target="_blank" rel="noopener noreferrer" href="https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/pods98-tutorial.pdf">https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/pods98-tutorial.pdf</a></li>
      </ul>

    </main>
  )
}

export default ReadingsPage;