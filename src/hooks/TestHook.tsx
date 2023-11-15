import { Collapse } from "antd";
import { useJWTDecode } from "./useJwtDecode"
import { CaretRightOutlined } from '@ant-design/icons';
import { tokenExample } from "../data/jwtExample";
import { useColor } from "./useColor";
import { useRandom } from "./useRandom";

export function TestHook(): any {
  const resJWT = useJWTDecode(tokenExample)
  const { Rose, Blue } = useColor();
  const resRandom = useRandom(20)
  return (
    <div>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        items={[
          {
            key: '1',
            label: 'useJWTDecode',
            children: <pre>{JSON.stringify(resJWT, null, 2)}</pre>,
          },
          {
            key: '2',
            label: 'useColor',
            children: (
              <div className="grid grid-cols-6 gap-4">
                <div style={{ backgroundColor: Rose[500] }} className="text-white flex justify-center items-center rounded-lg h-20 w-full">Rose.500</div>
                <div style={{ backgroundColor: Blue[500] }} className="text-white flex justify-center items-center rounded-lg h-20 w-full">Blue.500</div>
              </div>
            ),
          },
          {
            key: '3',
            label: 'useDatePicker',
            children: <p>Show in datepicker story</p>,
          },
          {
            key: '4',
            label: 'useRandom',
            children: <p>{resRandom}</p>,
          },
          {
            key: '5',
            label: 'useSearch',
            children: <p>Show in table story</p>,
          },
          {
            key: '6',
            label: 'useTable',
            children: <p>Show in table story</p>,
          },
        ]}
      />
    </div>
  )
}