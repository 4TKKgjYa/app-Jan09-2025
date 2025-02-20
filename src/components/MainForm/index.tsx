"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea'
import { useMailForm } from '@/hooks/useMailForm'

export const MailForm = () => {
  const { form, onSubmit } = useMailForm()
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="container flex flex-col gap-3">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ユーザー名</FormLabel>
              <FormControl>
                <Input placeholder="ユーザー名" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input placeholder="メールアドレス" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>主題</FormLabel>
              <FormControl>
                <Input placeholder="主題" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>本文</FormLabel>
              <FormControl>
                <Textarea placeholder="本文" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* １．Inputタグ内にonChangeイベントを作成する */}
        {/* ２．shadcnのrender引数に含まれているonChangeトリガーをonChangeイベントに当てはめる */}
        {/* ３．onChangeイベントが実行されることで、e.target.valueが変更されたタイミングでファイルオブジェクトにアクセスできるようになる */}
        {/* ４．ファイルオブジェクトを取得することで正常にfieldPropsで認識され、submitを押す際にこのe.target.valueが含まれるようになる？ */}
        {/* ５．fieldのvalueはなんのため？（これがないとonChangeイベントでファイルが認識されない） */}
        <FormField
          control={form.control}
          name="file"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>添付画像</FormLabel>
              <FormControl>
                <Input
                  accept="image/*"
                  type="file"
                  placeholder="ユーザー名"
                  onChange={(e) => {
                    onChange(e.target.files)
                  }}
                  {...fieldProps} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
};
