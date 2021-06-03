import React, { FC, Fragment } from 'react';
import theme, { Color } from '@/styles/theme';
import { hexToRgba } from '@/styles/utils';
import { Icon } from '@/styles/icons';
import { Typography, Button, Spacer } from '..';

export type TableOptions = Array<{
  title: string;
  onClick: (index: number) => void;
  icon: Icon;
  color: Color;
}>;

export type TableHeader = Array<{
  title: string;
  dataAttribute: string;
  align?: 'left' | 'right' | 'center';
  width?: number;
}>;

type Props = {
  header: TableHeader;
  datasource: Array<{
    [attribute: string]: any;
  }>;
  options?: TableOptions;
  showRowNumber?: boolean;
  datasourceKeyAttribute: string;
};

const Table: FC<Props> = ({
  datasource,
  header,
  showRowNumber,
  datasourceKeyAttribute,
  options,
}) => (
  <div className="container">
    <table>
      <thead>
        <tr>
          {showRowNumber && <th className="rowNumber"> </th>}
          {header.map(item => (
            <th align={item.align ?? 'center'} style={{ width: item.width }} key={item.title}>
              <Typography variant="subtitle" text={item.title.toUpperCase()} color="secondary" />
            </th>
          ))}
          {options && (
            <th className="options">
              <Typography variant="subtitle" text="OPCIONES" color="secondary" />
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {datasource.map((itemBody, i) => (
          <tr key={itemBody[datasourceKeyAttribute]}>
            {showRowNumber && (
              <td className="rowNumber">
                <Typography text={i + 1} color="secondary" />
              </td>
            )}
            {header.map(itemHeader => (
              <td
                align={itemHeader.align ?? 'center'}
                key={itemBody[datasourceKeyAttribute] + itemBody[itemHeader.dataAttribute]}
              >
                <Typography text={itemBody[itemHeader.dataAttribute]} color="secondary" />
              </td>
            ))}
            {options && (
              <td className="options buttons">
                {options.map((option, j) => (
                  <Fragment key={option.title}>
                    <Button
                      title={option.title}
                      icon={option.icon}
                      backgroundColor={option.color}
                      onClick={() => option.onClick(i)}
                    />
                    {j !== options.length - 1 && <Spacer size={2} direction="horizontal" />}
                  </Fragment>
                ))}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
    <style jsx>{`
      .container {
        background: ${hexToRgba(theme.color.main, 0.1)};
        border-radius: 5px;
      }
      .rowNumber {
        width: 30px;
        text-align: center;
        border-right: 1px solid ${hexToRgba(theme.color.main, 0.3)};
      }
      .options {
        width: ${60 * (options ? options.length : 0)}px;
        min-width: 100px;
        text-align: center;
      }
      .buttons {
        display: flex;
        justify-content: center;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
      }
      th {
        padding: 10px;
        border-bottom: 1px solid ${hexToRgba(theme.color.main, 0.3)};
      }
      td {
        padding: 10px;
      }
      tbody tr:hover {
        background: ${hexToRgba(theme.color.main, 0.1)};
      }
    `}</style>
  </div>
);

export default Table;
