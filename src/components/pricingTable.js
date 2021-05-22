import Table from 'react-bootstrap/Table';

export default function PricingTable () {
    return (
        <Table responsive striped bordered hover variant="info" className="text-center p-0">
            <thead>
                <tr>
                    <th>Service</th>
                    <th>One Dog Pricing</th>
                    <th>Two Dog Pricing</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1-Day Daycare</td>
                    <td>$26</td>
                    <td>$42</td>
                </tr>
                <tr>
                    <td>3-Day Daycare</td>
                    <td>$74</td>
                    <td>$144</td>
                </tr>
                <tr>
                    <td>5-Day Daycare</td>
                    <td>$120</td>
                    <td>$240</td>
                </tr>
            </tbody>
        </Table>
    );
}