import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function App() {
  return (
    <div className="container">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Živali</TabsTrigger>
          <TabsTrigger value="password">Sadje</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="grid grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Slon</CardTitle>
                <CardDescription>O njem</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg"></img>
                <p>
                  Sloni so večja skupina sesalcev, ki tvorijo družina živali
                  Elephantidae (sloni) v redu trobčarjev (Proboscidea). Danes so
                  poznane tri živeče vrste, ki jim grozi izumrtje: afriški
                  gozdni slon, afriški savanski slon in azijski slon (znan tudi
                  kot indijski slon). Sloni živijo v podsaharski Afriki, Južni
                  Aziji in Jugovzhodni Aziji. Družina Elephantidae (sloni) je
                  edina preživela družina iz roda Proboscidea (trobčarji);
                  ostali, danes izumrli, člani reda vključujejo dinoterije,
                  gomfoterije, mamute in mastodone.
                </p>
              </CardContent>
              <CardFooter>
                <p></p>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent>
          <Card>
            <CardHeader>
              <CardTitle>Ananas</CardTitle>
              <CardDescription>O njem</CardDescription>
            </CardHeader>
            <CardContent>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Starr_020630-0018_Ananas_comosus.jpg/240px-Starr_020630-0018_Ananas_comosus.jpg"></img>
              <p>
                Ananas raste iz tal in praviloma ne preseže niti enega metra
                višine. Iz rozete čvrstih, čez 1 meter dolgih in do 6 cm širokih
                listov zraste (12-20 mesecev po sajenju) klasasto, betičasto
                socvetje s skoraj 30 cm dolgim steblom in pogosto z več kot 100
                neopaznimi, zelenkasto belimi ali nežno vijoličnimi cvetovi za
                krovnimi listi, od katerih so zgornji podobni zelenim listom in
                oblikujejo listni šop oz. »krono«. Pri nastanku samo enega
                sadeža na vrhu rastline se cvetni deli združijo v storžasto,
                rumeno do oranžno obarvano soplodje, ki je pri posameznih vrstah
                različno veliko (večinoma do 20 cm), obdano s hrapavo in raskavo
                neužitno zunanjo plastjo. Sadež se do zorjenja še povečuje in
                debeli. Sredica ima belkasto ali rumeno, prijetno sladko-kislo
                meso, bogato z minerali (zlasti železom in kalcijem) ter
                vitamini A, B in C.
              </p>
            </CardContent>
            <CardFooter>
              <p></p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <Avatar>
        <AvatarImage src="data:image/jpeg;base64,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" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
