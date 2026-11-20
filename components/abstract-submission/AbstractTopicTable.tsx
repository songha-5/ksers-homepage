import type { ReactElement } from "react";
import type { AbstractTopic } from "@/components/abstract-submission/abstract-submission-model";
import {
  SIMPLE_TABLE_CELL_CLASS,
  SIMPLE_TABLE_HEADER_CLASS,
} from "@/components/simple-table/simple-table-styles";

interface AbstractTopicTableProps {
  readonly topics: readonly AbstractTopic[];
}

export function AbstractTopicTable({
  topics,
}: AbstractTopicTableProps): ReactElement {
  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr>
          <th scope="col" className={`${SIMPLE_TABLE_HEADER_CLASS} w-[30%]`}>
            No.
          </th>
          <th scope="col" className={SIMPLE_TABLE_HEADER_CLASS}>
            Topic
          </th>
        </tr>
      </thead>
      <tbody>
        {topics.map((topic) => (
          <tr key={topic.id}>
            <td className={SIMPLE_TABLE_CELL_CLASS}>{topic.number}</td>
            <td className={SIMPLE_TABLE_CELL_CLASS}>{topic.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
