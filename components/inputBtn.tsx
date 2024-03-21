import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function InputWithButton() {
  return (
    <div className="flex w-[34rem] items-center space-x-2">
      <Input type="search" placeholder="Search Countries" />
      <Button type="submit">Search</Button>
    </div>
  );
}
