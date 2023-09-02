export async function getResponse(res: string): Promise<Response> {
    return await fetch(`http://192.168.1.249:3030${res}`);
}