import { LineChart,Line, XAxis, YAxis,CartesianGrid, Tooltip, AreaChart, Area, BarChart, Bar, Legend, ComposedChart, PieChart, Pie } from "recharts";

const students = [
    { "id": 1, "name": "Alice", "math": 95, "science": 80, "english": 40 },
    { "id": 2, "name": "Bob", "math": 90, "science": 75, "english": 35 },
    { "id": 3, "name": "Charlie", "math": 85, "science": 70, "english": 30 },
    { "id": 4, "name": "David", "math": 80, "science": 65, "english": 25 },
    { "id": 5, "name": "Eve", "math": 75, "science": 60, "english": 20 },
    { "id": 6, "name": "Frank", "math": 70, "science": 55, "english": 58 },
    { "id": 7, "name": "Grace", "math": 65, "science": 50, "english": 90 },
    { "id": 8, "name": "Hank", "math": 60, "science": 45, "english": 72 },
    { "id": 9, "name": "Ivy", "math": 55, "science": 40, "english": 84 },
    { "id": 10, "name": "Jack", "math": 50, "science": 35, "english": 89 }
  ]
  
  

const Rechart = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 my-12">
            <div>
                <h1 className="text-3xl font-bold font-mono text-center">Data Charts</h1>
                <p className="max-w-2xl mx-auto text-center text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae voluptatum enim id eum eius, eos placeat pariatur expedita iure velit.</p>
            </div>
            {/* charts */}
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* chart 1 */}
                <LineChart width={320} height={300} data={students}>
                    <Line dataKey="math" stroke="red"/>
                    <Line dataKey="science" stroke="blue"/>
                    <Line dataKey="english" stroke="green"/>
                </LineChart>
                {/* chart 2 */}
                <LineChart width={320} height={300} data={students}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Line dataKey="math" stroke="red"/>
                    <Line dataKey="science" stroke="blue"/>
                    <Line dataKey="english" stroke="green"/>
                </LineChart>
                {/* chart 3 */}
                <LineChart width={320} height={300} data={students}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid/>
                    <Line dataKey="math" stroke="red"/>
                    <Line dataKey="science" stroke="blue"/>
                    <Line dataKey="english" stroke="green"/>
                </LineChart>
                {/* chart 4 */}
                <LineChart width={320} height={300} data={students}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="5 5"/>
                    <Line dataKey="math" stroke="red"/>
                    <Line dataKey="science" stroke="blue"/>
                    <Line dataKey="english" stroke="green"/>
                </LineChart>
                {/* chart 5 */}
                <LineChart width={320} height={300} data={students}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="5 5"/>
                    <Line dataKey="math" stroke="red"/>
                    <Line dataKey="science" stroke="blue"/>
                    <Line dataKey="english" stroke="green"/>
                    <Tooltip/>
                </LineChart>
                {/* chart 6 */}
                <AreaChart width={320} height={300} data={students}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="5 5"/>
                <Area dataKey="math" stroke="red" fill="red"/>
                <Area dataKey="science" stroke="blue" fill="blue"/>
                <Area dataKey="english" stroke="green" fill="green"/>
                <Tooltip/>
                </AreaChart>
                {/* charts 7 */}
                <AreaChart width={320} height={300} data={students}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="5 5"/>
                <Area dataKey="math" stroke="red" fill="red" stackId="1"/>
                <Area dataKey="science" stroke="blue" fill="blue" stackId="1"/>
                <Area dataKey="english" stroke="green" fill="green" stackId="1"/>
                <Tooltip/>
                </AreaChart>
                {/* chart 8 */}
                <BarChart width={320} height={300} data={students}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Bar dataKey="math" stroke="red" fill="red"/>
                <Bar dataKey="science" stroke="blue" fill="blue" />
                <Bar dataKey="english" stroke="green" fill="green"/>
                <Tooltip/>
                </BarChart>
                {/* chart 9 */}
                <BarChart width={320} height={300} data={students}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Legend />
                <Bar dataKey="math" stroke="red" fill="red"/>
                <Bar dataKey="science" stroke="blue" fill="blue" />
                <Bar dataKey="english" stroke="green" fill="green"/>
                <Tooltip/>
                </BarChart>
                {/* chart 9 */}
                <CartesianGrid width={320} height={300} data={students}>
                <XAxis dataKey="name" scale="band"/>
                <YAxis/>
                <Bar dataKey="math" stroke="red" fill="red"/>
                <Bar dataKey="science" stroke="blue" fill="blue" />
                <Bar dataKey="english" stroke="green" fill="green"/>
                <Tooltip/>
                </CartesianGrid>
                {/* chart 10 */}
                <ComposedChart width={320} height={300} data={students}>
                <XAxis dataKey="name" scale="band"/>
                <YAxis/>
                <Bar dataKey="math" stroke="red" fill="red"/>
                <Bar dataKey="science" stroke="blue" fill="blue" />
                <Bar dataKey="english" stroke="green" fill="green"/>
                <Tooltip/>
                </ComposedChart>
                {/* chart 11 */}
                <ComposedChart width={320} height={300} data={students}>
                <XAxis dataKey="name" scale="band"/>
                <YAxis/>
                <Area dataKey="math" stroke="red" fill="red"/>
                <Bar dataKey="math" stroke="red" fill="green"/>
                <Line dataKey="math" stroke="red" fill="black"/>

                <Area dataKey="science" stroke="blue" fill="blue"/>
                <Bar dataKey="science" stroke="blue" fill="blue"/>
                <Line dataKey="science" stroke="blue" fill="blue"/>

                <Area dataKey="english" stroke="green" fill="green"/>
                <Bar dataKey="english" stroke="green" fill="green"/>
                <Line dataKey="english" stroke="green" fill="green"/>
                <Tooltip/>
                </ComposedChart>
                {/* chart 12 */}
                <PieChart width={320} height={300}>
                <Pie data={students} dataKey="math" cx="50%" cy="50%" outerRadius={60} fill="red" />
                <Pie data={students} dataKey="science" cx="50%" cy="50%" outerRadius={60} fill="blue" />
                <Pie data={students} dataKey="english" cx="50%" cy="50%" outerRadius={60} fill="green" />
                {/* <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label /> */}
                <Tooltip/>
                </PieChart>

            </div>
        </div>
    );
};

export default Rechart;