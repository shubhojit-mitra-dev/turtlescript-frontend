import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Course {
  id: string;
  title: string;
  status: 'active' | 'paused' | 'completed';
  notifications: boolean;
}

interface ManageCourseModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedCourse: Course) => void;
}

export function ManageCourseModal({ course, isOpen, onClose, onSave }: ManageCourseModalProps) {
  const [editedCourse, setEditedCourse] = useState<Course>(course);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedCourse(prev => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (value: string) => {
    setEditedCourse(prev => ({ ...prev, status: value as 'active' | 'paused' | 'completed' }));
  };

  const handleNotificationsChange = (checked: boolean) => {
    setEditedCourse(prev => ({ ...prev, notifications: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedCourse);
    // API call: Update course
    // Example: await updateCourse(editedCourse);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Manage Course</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Course Title</Label>
            <Input
              id="title"
              name="title"
              value={editedCourse.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Course Status</Label>
            <Select value={editedCourse.status} onValueChange={handleStatusChange}>
              <SelectTrigger id="status">
                <SelectValue placeholder="Select course status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">Course Notifications</Label>
            <Switch
              id="notifications"
              checked={editedCourse.notifications}
              onCheckedChange={handleNotificationsChange}
            />
          </div>
          <DialogFooter>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

